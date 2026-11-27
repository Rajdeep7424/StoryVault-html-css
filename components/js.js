let nav =document.getElementById('navbar')
let navdata =`<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="../../index.html">Story Vault</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a id="home" class="nav-link" href="../../index.html">Home</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                        Story Categories
                    </a>
                    <ul class="dropdown-menu bg-dark">
                    <li><a class="dropdown-item text-secondary" href="../../categories/adventure.html">Adventure</a></li>
                    <li><a class="dropdown-item text-secondary" href="../../categories/comedy.html">Comedy</a></li>
                    <li><a class="dropdown-item text-secondary" href="../../categories/drama.html">Drama</a></li>
                    <li><a class="dropdown-item text-secondary" href="../../categories/fantasy.html">Fantasy</a></li>
                    <li><a class="dropdown-item text-secondary" href="../../categories/horror.html">Horror</a></li>
                    <li><a class="dropdown-item text-secondary" href="../../categories/mystery.html">Mystery</a></li>
                    <li><a class="dropdown-item text-secondary" href="../../categories/psychology.html">Psychology</a></li>
                    <li><a class="dropdown-item text-secondary" href="../../categories/romance.html">Romance</a></li>
                    <li><a class="dropdown-item text-secondary" href="../../categories/science fiction.html">Science Fiction</a></li>
                    <li><a class="dropdown-item text-secondary" href="../../categories/self discovery.html">Self Discovery</a></li>
                    <li><a class="dropdown-item text-secondary" href="../../categories/adventure.html">Adventure</a></li>
                    <li><a class="dropdown-item text-secondary" href="../../categories/spy.html">Spy Fiction</a></li>
                    <li><a class="dropdown-item text-secondary" href="../../categories/thriller.html">Thriller</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="about" href="../../about.html">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="contact" href="../../contact.html">Contact Us</a>
                </li>
            </ul>
        </div>
    </div>
</nav>`;

let footer =document.getElementById('footer')
let footerdata =`<footer>
    <p>&copy; 2024 StoryVault. All rights reserved.</p>
</footer>`;

let mainfooter =document.getElementById('mainfooter')
let mainfooterdata =`<footer>
  <div class="py-3 bg-dark text-white text-center">
  <p>&copy; 2024 StoryVault. All rights reserved.</p>
      <p>
      <!-- Google -->
      <a
        data-mdb-ripple-init class="btn btn-link btn-floating btn-lg text-light m-1"
        href="mailto:smartcontrol1075@gmail.com"
        role="button"
        data-mdb-ripple-color="light"
        ><i class="fab fa-google"></i
      ></a>

        <!-- Facebook -->
      <a
        data-mdb-ripple-init class="btn btn-link btn-floating btn-lg text-light m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="light"
        ><i class="fab fa-facebook-f"></i
      ></a>

      <!-- Twitter -->
      <a
        data-mdb-ripple-init class="btn btn-link btn-floating btn-lg text-light m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="light"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Instagram -->
      <a
        data-mdb-ripple-init class="btn btn-link btn-floating btn-lg text-light m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="light"
        ><i class="fab fa-instagram"></i
      ></a>
      </p>
  </div>
</footer>`;

const currentPath = window.location.pathname;

if(nav !== null){nav.innerHTML = navdata;}

if(footer !== null){footer.innerHTML = footerdata;}

if(mainfooter !== null){mainfooter.innerHTML = mainfooterdata;}

console.log(currentPath);
if(currentPath === '/index.html') {
    document.getElementById('home').style.color='WHITE';
}
else if(currentPath === '/contact.html'){
    document.getElementById('contact').style.color='WHITE';
    console.log("first")
}    
else if (currentPath === '/about.html'){
    document.getElementById('about').style.color='WHITE';}