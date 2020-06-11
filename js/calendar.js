const productEventColor = "#1db0f0";
const regularEventColor = "#F4AF1B";
const deadlineEventColor = "#f05e48";

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'interaction', 'dayGrid', 'timeGrid' ],
    defaultView: 'dayGridMonth',
    eventLimit: true,
    eventLimitClick: "popover",
    // eventLimitText: true,
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: [
      {
        title: 'Re-design and re-launch Launch Tech website',
        start: '2020-05-01',
        end: '2020-05-03',
        color: productEventColor
      },
      {
        title: 'Build and launch NPOCore!',
        start: '2020-05-03',
        end: '2020-05-05',
        color: productEventColor
      },
      {
        title: 'NPO Core - Implement security features',
        start: '2020-05-05',
        end: '2020-05-07',
        color: productEventColor
      },
      {
        title: 'Revamp and improve on the w3Hacks platform',
        start: '2020-05-04',
        end: '2020-05-07',
        color: productEventColor
      },
      {
        title: 'Applications close!',
        start: '2020-05-06T21:00:00',
        color: deadlineEventColor
      },
      {
        title: 'First-round applications are analyzed',
        start: '2020-05-07',
        end: '2020-05-15',
        color: regularEventColor
      },
      {
        title: 'Improve SEO of NPO Core!',
        start: '2020-05-07',
        end: '2020-05-09',
        color: productEventColor
      },
      {
        title: 'Launch Acquisition Program!',
        start: '2020-05-08',
        end: '2020-05-10',
        color: deadlineEventColor
      },
      {
        title: 'Second-round interview results are revealed!',
        start: '2020-05-15',
        end: '2020-05-17',
        color: deadlineEventColor
      },
      {
        title: 'Second-round interviews',
        start: '2020-05-18',
        end: '2020-05-23',
        color: regularEventColor
      },
      {
        title: 'Work on first beta release of AveryBot!',
        start: '2020-05-23',
        end: '2020-05-29',
        color: productEventColor
      },
      {
        title: 'AveryBot beta released!',
        start: '2020-05-29',
        color: deadlineEventColor
      },
      {
        title: 'Final results released!',
        start: '2020-05-30',
        color: deadlineEventColor
      },
      {
        title: 'Work on first beta release of Coscript!',
        start: '2020-05-23',
        end: '2020-05-31',
        color: productEventColor
      },
      {
        title: 'Work on v2.0 release of NPO Core',
        start: '2020-05-29',
        end: '2020-06-03',
        color: productEventColor
      },
      {
        title: 'Undergo beta testing for NPO Core v2.0',
        start: '2020-06-03',
        end: '2020-06-06',
        color: regularEventColor
      },
      {
        title: 'NPO Core v2.0 released!',
        start: '2020-06-06',
        color: deadlineEventColor
      }
    ]
  });

  calendar.render();
});
