document.addEventListener('DOMContentLoaded', function () {
    //this section is all for making the things draggable to the calendar
    var Draggable = FullCalendarInteraction.Draggable;
    var containerEl = document.getElementById('external-events');

    new Draggable(containerEl, {
        itemSelector: '.fc-event',
        eventData: function (eventEl) {
            return {
                title: eventEl.innerText,
            };
        },
    });
});
