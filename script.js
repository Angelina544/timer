const input = document.querySelector('.input-section__input');
const button = document.querySelector('.input-section__button');

document.addEventListener('DOMContentLoaded', function () {

    function timeCount(id) {
        const timer = document.getElementById(id);

        function setTime() {
            const seconds = timer.querySelector('.timer__count-seconds');

            button.addEventListener('click', function () {
                if (input.value == 'admin') {
                    alert('Ласкаво просимо');
                    clearInterval(timeInterval);
                    seconds.textContent = '00';
                }
            });

            let leftUntill = 20;
            let timeInterval = setInterval(function () {
                if (leftUntill <= 0) {
                    clearInterval(timeInterval);
                    seconds.textContent = '00';
                    alert('Ви не встигли');
                }
                else {
                    if (leftUntill <= 9) {
                        seconds.textContent = `0${leftUntill}`;
                        leftUntill--;

                    }
                    else {
                        seconds.textContent = leftUntill;
                        leftUntill--;
                    };
                };
            }, 1000);
        };
        setTime();
    };
    timeCount('timer');
});





const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');

btnStart.addEventListener('click', function () {
    function timeCount(id) {
        const timer = document.getElementById(id);

        function setTime() {
            const minutes = timer.querySelector('.time-count__minutes');
            const seconds = timer.querySelector('.time-count__seconds');

            let minutesCount = 0;
            let secondsCount = 0;

            let timeInterval = setInterval(function () {
                if (secondsCount < 9) {
                    secondsCount++;
                    seconds.textContent = `0${secondsCount}`;
                }
                else if (secondsCount < 60) {
                    secondsCount++;
                    seconds.textContent = secondsCount;
                }
                else {
                    secondsCount = 0;
                    minutesCount++;
                    if (minutesCount <= 9) {
                        minutes.textContent = `0${minutesCount}:`;
                    }
                    else {
                        minutes.textContent = `${minutesCount}:`;
                    };
                };
            }, 1000);

            btnStop.addEventListener('click', function () {
                clearInterval(timeInterval);
                seconds.textContent = '00';
                minutes.textContent = '00:';
            });
        };
        setTime();
    };
    timeCount('timer2');
});

document.addEventListener('DOMContentLoaded', function () {
    function timeCount(id, endtime) {
        const timer = document.getElementById(id);

        const timerDays = timer.querySelector('.timer__count-days');
        const timerHours = timer.querySelector('.timer__count-hours');
        const timerMinutes = timer.querySelector('.timer__count-minutes');
        const timerSeconds = timer.querySelector('.timer__count-seconds');

        function setTime() {
            let now = new Date();

            let leftUntil = endtime - now;

            let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
            let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
            let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
            let seconds = Math.floor(leftUntil / 1000) % 60;

            timerDays.textContent = days;
            timerHours.textContent = hours;
            timerMinutes.textContent = minutes;
            timerSeconds.textContent = seconds;

            if (leftUntil <= 0) {
                clearInterval(timeInterval);
                timerDays.textContent = '00';
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';

                const end = document.createElement('div');
                end.className = 'end';
                const sectionTimer = document.querySelector('.section-timer3');
                sectionTimer.insertAdjacentElement('afterbegin', end);
                end.textContent = 'На жаль, акція вже закінчилась';
            };
        };
        let timeInterval = setInterval(setTime, 1000);
        setTime();
    };
    timeCount('timer3', new Date('Jan 25 2023 00:00:00'));
});