breakScroll = false;
(function () {
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        // var weeks = Math.floor(t / (1000 * 60 * 60 * 24 * 7));
        return {
            'total': t,
            // 'weeks': weeks,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(endtime) {

        var timeinterval = setInterval(function () {
            var t = getTimeRemaining(endtime);
            // document.getElementsByClassName('weeks')[0].innerHTML = t.weeks;
            document.getElementsByClassName('days')[0].innerHTML = t.days < 0 ? 0 : t.days;
            document.getElementsByClassName('hours')[0].innerHTML = t.hours < 0 ? 0 : t.hours;
            document.getElementsByClassName('minutes')[0].innerHTML = t.minutes < 0 ? 0 : t.minutes;
            document.getElementsByClassName('seconds')[0].innerHTML = t.seconds < 0 ? 0 : t.seconds;
            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }, 1000);
    }
    initializeClock('07/13/2020 11:00:00');
    

    function autoScroll() {
        var height = document.getElementById("container").scrollHeight - window.innerHeight;
        var scrollHeight = 0;
        var interval = setInterval(() => {
            if (breakScroll || (scrollHeight > height)) {
                clearInterval(interval)
            } else {

                scrollHeight = (window.lastScrollTop || 0) + 4;
                // document.getElementById("container").scrollTop = scrollHeight;
                window.scrollTo(0, scrollHeight)

            }
        }, 30)
    }

})();

