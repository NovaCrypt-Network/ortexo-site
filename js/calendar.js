const eventColor = "#F4AF1B";

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
        color: eventColor
      },
      {
        title: 'Build and launch our HS organization hub!',
        start: '2020-05-03',
        end: '2020-05-07',
        color: eventColor
      },
      {
        title: 'Revamp and improve on the w3Hacks platform',
        start: '2020-05-03',
        end: '2020-05-07',
        color: eventColor
      },
      {
        title: 'Applications close!',
        start: '2020-05-06T21:00:00',
        color: eventColor
      },
      {
        title: 'First-round applications are analyzed',
        start: '2020-05-07',
        end: '2020-05-15',
        color: eventColor
      },
      {
        title: 'Second-round interview results are revealed!',
        start: '2020-05-15',
        end: '2020-05-17',
        color: eventColor
      },
      {
        title: 'Second-round interviews',
        start: '2020-05-18',
        end: '2020-05-23',
        color: eventColor
      },
      {
        title: 'Final results released!',
        start: '2020-05-30',
        color: eventColor
      }
    ]
  });

  calendar.render();
});
