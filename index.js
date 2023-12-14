const endDate = ("15-12-2023 06:05 PM")

const clock = () => {
            const end = new Date(endDate);
            const now = new Date();
            const diff = (end - now)/1000;
            if(diff<0) return;
            const day = Math.floor(diff/3600/24);
            const hour = Math.floor((diff/3600)%24);
            const min = Math.floor((diff/60)%60);
            const sec = Math.floor((diff)%60);

            document.getElementById('day').innerHTML = day;
            document.getElementById('hour').innerHTML = hour;
            document.getElementById('min').innerHTML = min;
            document.getElementById('sec').innerHTML = sec;
} 
clock();

setInterval (clock,1000)
