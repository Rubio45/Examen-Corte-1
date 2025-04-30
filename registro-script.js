document.getElementById('registroForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const carrera = document.getElementById('carrera').value.trim();
    const conferencias = document.querySelectorAll('input[name="conferencias"]:checked');
  
    if (!nombre || !correo || !carrera || conferencias.length === 0) {
      alert("⚠️ Completa todos los campos obligatorios.");
      return;
    }
  
    const emailRegex = /^[a-zA-Z0-9._%+-]+@uamv\.edu\.ni$/;
    if (!emailRegex.test(correo)) {
      alert("❌ El correo debe ser institucional (@uamv.edu.ni).");
      return;
    }
  
    const form = document.getElementById('registroForm');
  
    // Animación de salida
    form.classList.add("transition-opacity", "duration-700", "opacity-0");
  
    setTimeout(() => {
      form.innerHTML = `
        <div class="flex flex-col items-center justify-center text-center py-16 animate-fade-in">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-28 w-28 text-green-400 drop-shadow-lg animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <h2 class="text-3xl mt-6 font-bold text-green-300">¡Registro completado!</h2>
          <p class="mt-2 text-sm text-green-100">Te hemos registrado exitosamente para las conferencias seleccionadas.</p>
        </div>
      `;
  
      form.classList.remove("opacity-0", "border-cyan-400");
      form.classList.add("opacity-100", "border-green-400", "bg-opacity-80", "transition-opacity", "duration-700");
    }, 700);
  });
  