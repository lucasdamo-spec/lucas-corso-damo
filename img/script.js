// ===== CONTADOR =====
const numeros = document.querySelectorAll('.numero');
numeros.forEach(numero => {
    const updateCount = () => {
        const target = +numero.getAttribute('data-numero');
        const count = +numero.innerText;
        const increment = target / 100;
        if(count < target){
            numero.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20);
        } else {
            numero.innerText = target;
        }
    }
    const observer = new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                updateCount();
                observer.unobserve(numero);
            }
        });
    }, {threshold:0.5});
    observer.observe(numero);
});

// ===== BOTÃO TOPO =====
const botaoTopo = document.getElementById('topo');
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 300){
        botaoTopo.style.display = 'block';
    } else {
        botaoTopo.style.display = 'none';
    }
});
botaoTopo.addEventListener('click', ()=>{
    window.scrollTo({top:0, behavior:'smooth'});
});

// ===== SCROLL SUAVE PARA LINKS =====
const links = document.querySelectorAll('nav a, .btn');
links.forEach(link=>{
    link.addEventListener('click', e=>{
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});
