tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      }
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.sidebar-toggle').addEventListener('click', (e) => {
    const sidebar = document.querySelector('.dashboard-sidebar');
    if(sidebar.classList.contains('expanded')) {
      sidebar.classList.remove('expanded');
      sidebar.classList.add('collapsed');
    } else {
      sidebar.classList.remove('collapsed');
      sidebar.classList.add('expanded');
    }
  })
});