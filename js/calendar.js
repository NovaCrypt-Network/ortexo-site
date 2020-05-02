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
        title: 'Build and launch our HS organization cohort!',
        start: '2020-05-03',
        end: '2020-05-05',
        color: eventColor
      }
    ]
  });

  calendar.render();
});
