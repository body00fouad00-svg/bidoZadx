// وظيفة لإظهار العناصر عند التمرير (Scroll Animation)
document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(section => {
        observer.observe(section);
    });

    console.log("مرحباً بك يا مبرمج! موقع عبدالرحمن محمد جاهز.");
});