$(document).ready(function() {
    $('#viewReportButton').on('click', function() {
        $(this).addClass('active');
        $('#dashboardButton').removeClass('active');
    });

    $('#dashboardButton').on('click', function() {
        $(this).addClass('active');
        $('#viewReportButton').removeClass('active');
    });
});
function filterReports() {
    const filterReport = document.getElementById('filter-option').value;
   
    const reports = Array.from(document.querySelectorAll('.report-card'));

    if (filterReport === 'newest') {
        reports.sort((a, b) => new Date(b.dataset.date) - new Date(a.dataset.date));
    } else if (filterReport === 'highest') {
        reports.sort((a, b) => b.dataset.votes - a.dataset.votes);
    }

    const container = document.querySelector('.container');
    const reportCards = container.querySelectorAll('.report-card');
    reportCards.forEach(card => container.removeChild(card));

    reports.forEach(report => container.appendChild(report));
}

function viewReportDetails(card) {
    // Mendapatkan data dari report card yang diklik
    const reportTitle = card.querySelector('.report-title').innerText;
    const reportAuthor = card.querySelector('.report-author').innerText;
    const reportTag = card.querySelector('.report-tag').innerText;
    const reportDate = card.querySelector('.report-date').innerText;
    const reportDesc = card.querySelector('.report-desc p').innerText;
    const reportVotes = card.querySelector('.vote-count').innerText;
    const reportStatus = card.querySelector('.status').innerText;

    // Simpan data ke localStorage untuk diakses di halaman reportdetails.html
    localStorage.setItem('reportTitle', reportTitle);
    localStorage.setItem('reportAuthor', reportAuthor);
    localStorage.setItem('reportTag', reportTag);
    localStorage.setItem('reportDate', reportDate);
    localStorage.setItem('reportDesc', reportDesc);
    localStorage.setItem('reportVotes', reportVotes);
    localStorage.setItem('reportStatus', reportStatus);

    // Redirect ke halaman reportdetails.html
    window.location.href = 'reportdetails.html';
}
