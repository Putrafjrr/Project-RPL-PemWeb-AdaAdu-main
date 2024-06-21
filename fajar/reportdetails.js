$(document).ready(function() {
    $('#viewReportButton').on('click', function() {
        $(this).addClass('active');
        $('#dashboardButton').removeClass('active');
    });

    $('#dashboardButton').on('click', function() {
        $(this).addClass('active');
        $('#viewReportButton').removeClass('active');
    });
    // Ambil data dari localStorage
    $('#report-title').text(localStorage.getItem('reportTitle'));
    $('#report-author').text(localStorage.getItem('reportAuthor'));
    $('#report-date').text(localStorage.getItem('reportDate'));
    $('#report-desc').text(localStorage.getItem('reportDesc'));
    $('#report-status').text(localStorage.getItem('reportStatus')); // Contoh status
    $('#report-status').addClass('status-in-progress'); // Contoh status class
    $('#vote-count').text('150 vote'); // Contoh vote count
});
