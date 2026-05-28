  const movies = [

    {
      title:"Stranger Things",
      image:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
      desc:"A thrilling mystery adventure with supernatural powers."
    },

    {
      title:"Money Heist",
      image:"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop",
      desc:"A genius mastermind plans the biggest robbery in history."
    },

    {
      title:"Dark",
      image:"https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=1200&auto=format&fit=crop",
      desc:"A mysterious time travel thriller full of suspense."
    },

    {
      title:"Wednesday",
      image:"https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?q=80&w=1200&auto=format&fit=crop",
      desc:"A dark comedy mystery featuring Wednesday Addams."
    },

    {
      title:"Breaking Bad",
      image:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
      desc:"A chemistry teacher becomes a dangerous drug kingpin."
    }

  ];

  const movieRow =
    document.getElementById("movieRow");

  const searchInput =
    document.getElementById("searchInput");

  // RENDER MOVIES

  function renderMovies(data){

    movieRow.innerHTML = "";

    data.forEach(movie => {

      movieRow.innerHTML += `

        <div class="movie-card"
          onclick="openModal(
            '${movie.title}',
            '${movie.image}',
            '${movie.desc}'
          )">

          <img src="${movie.image}">

          <div class="movie-info">

            <h3>${movie.title}</h3>

            <p>${movie.desc}</p>

          </div>

        </div>

      `;

    });

  }

  renderMovies(movies);

  // SEARCH

  searchInput.addEventListener("input", () => {

    const value =
      searchInput.value.toLowerCase();

    const filtered =
      movies.filter(movie =>
        movie.title.toLowerCase().includes(value)
      );

    renderMovies(filtered);

  });

  // MODAL

  const modal =
    document.getElementById("modal");

  const modalTitle =
    document.getElementById("modalTitle");

  const modalImage =
    document.getElementById("modalImage");

  const modalDesc =
    document.getElementById("modalDesc");

  const closeBtn =
    document.getElementById("closeBtn");

  function openModal(title,image,desc){

    modal.style.display = "flex";

    modalTitle.innerText = title;

    modalImage.src = image;

    modalDesc.innerText = desc;

  }

  closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

  });

  window.addEventListener("click", (e) => {

    if(e.target === modal){

      modal.style.display = "none";

    }

  });
