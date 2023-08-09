let totalAdmins = 0;
let totalMidwives = 0;
let totalMothers = 0;
let totalBabies = 0;
let totalNotices = 0;

getWidgetsData();

function getWidgetsData() {
    getAdmins();
    getMothers();
    getBabies(null);
    getMidwives();
    // getAllNotices();
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
            document.getElementById('total-notices').innerText = data?.notices?.length || 0;
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
