let totalAdmins = 0;
let totalMidwives = 0;
let totalMothers = 0;
let totalBabies = 0;
let totalNotices = 0;

getWidgetsData();

function getWidgetsData() {
    getAdmins();
    getMothers();

    if (userRole === 'Mother') {
        $('#loader').show();
        getBabiesByMotherUserId(UserId).then(data => {
            document.getElementById('total-babies').innerText = data?.length || 0;
            getNextClinicDetails(data);
            $('#loader').hide();
        });
    } else getBabies();

    getMidwives();
    getAllNotices();
}

function getNextClinicDetails(data) {
    console.log(data);
    let tabsRow = '';
    let tabsContent = '';
    data.forEach((item, index) => {
        let clinics = '';
        let vaccines = '';

        if(item.clinics.length === 0) {
            clinics += `<div class="col-md-4">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-start">
                                        <div class="me-3">
                                            <span class="nk-menu-icon"><em
                                                    class="icon ni ni-calendar"></em></em></span>
                                        </div>
                                        <div class="flex-1">
                                            <div class="font-size-16 mt-2">No Pending Clinics</div>
                                        </div>
                                    </div>
                                    <h4 class="mt-4" id="total-admins"> - </h4>
                                </div>
                            </div>
                        </div>`;
        } else {
            item.clinics.map(clinic => {
                    clinics += `<div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="d-flex align-items-center justify-start">
                                                <div class="me-3">
                                                    <span class="nk-menu-icon"><em
                                                            class="icon ni ni-calendar"></em></em></span>
                                                </div>
                                                <div class="flex-1">
                                                    <div class="font-size-16 mt-2">${clinic.visit_type === CLINIC_VISIT_TYPES.BABY_VISIT ? 'Next Baby Visit Date' : 'Next Midwife Visit Date'}</div>
                                                </div>
                                            </div>
                                            <h4 class="mt-4" id="total-admins">${clinic.date}</h4>
                                        </div>
                                    </div>
                                </div>`;
            });
        }


        item.vaccines.map(vaccine => {
            vaccines += `<div class="col-md-4">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="d-flex align-items-center justify-start">
                                            <div class="me-3">
                                                <span class="nk-menu-icon"><em
                                                        class="icon ni ni-calendar"></em></em></span>
                                            </div>
                                            <div class="flex-1">
                                                <div class="font-size-16 mt-2">Next Vaccination Date</div>
                                            </div>
                                        </div>
                                        <h4 class="mt-4" id="total-admins">${vaccine.date}</h4>
                                    </div>
                                </div>
                            </div>`;
        });

        tabsRow += `
        <li class="nav-item">
            <a class="nav-link ${index === 0 ? 'active' : ''}" data-bs-toggle="tab" href="#${index}">${item.name}</a>
        </li>`;

        tabsContent += `<div class="tab-pane ${index === 0 ? 'active' : ''}" id="${index}">
                            <div class="row">
                                ${clinics}
                            </div>
                        </div>`;
    });

    

    document.getElementById('next-clinics-tabs').innerHTML = tabsRow;
    document.getElementById('next-clinics-tabs-content').innerHTML = tabsContent;
}

async function getAdmins() {
    $('#loader').show();
    const url = `${baseURL}/admins/get-admins.php`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Your-Optional-Authentication-Token'
            }
        });

        if (response) {
            const data = await response.json();
            document.getElementById('total-admins').innerText = data?.admins?.length || 0;
        }

    } catch (error) {
        console.error('Error getting admins:', error);
        $('#loader').hide();
        return { success: 0, status: 500, message: 'Internal Server Error' };
    }
}

async function getMothers() {
    $('#loader').show();
    const url = `${baseURL}/mothers/get-mothers.php`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Your-Optional-Authentication-Token'
            }
        });

        if (response) {
            const data = await response.json();
            document.getElementById('total-mothers').innerText = data?.mothers?.length || 0;
        }
    } catch (error) {
        console.error('Error getting mothers:', error);
        $('#loader').hide();
        return { success: 0, status: 500, message: 'Internal Server Error' };
    }
}

function getBabies(motherId = null) {
    $('#loader').show();
    let url = `${baseURL}/babies/get-babies.php`;
    if (motherId !== null) {
        url += '?mother_id=' + motherId;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.success === 1) {
                document.getElementById('total-babies').innerText = data?.babies?.length || 0;
                $('#loader').hide();
            }
        })
        .catch(error => console.error('Error:', error));
}

async function getMidwives() {
    $('#loader').show();
    const url = `${baseURL}/midwives/get-midwives.php`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Your-Optional-Authentication-Token'
            }
        });

        if (response) {
            const data = await response.json();
            document.getElementById('total-midwives').innerText = data?.midwives?.length || 0;
            $('#loader').hide();
        }
    } catch (error) {
        console.error('Error getting midwives:', error);
        $('#loader').hide();
        return { success: 0, status: 500, message: 'Internal Server Error' };
    }
}

function getAllNotices() {
    $('#loader').show();
    fetch(`${baseURL}/notices/get-notices.php`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.success === 1) {
                document.getElementById('total-notices').innerText = data?.data?.length || 0;
            } else {
                console.error('Error getting notices:', data.message);
            }
            $('#loader').hide();
        })
        .catch(error => {
            alert('Error:', error);
            $('#loader').hide();
        });
}
