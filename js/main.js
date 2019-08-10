document.querySelector(".btn-primary").addEventListener("click", saveBookmark);

function saveBookmark(e) {
  e.preventDefault();

  var siteName = document.getElementById("siteName").value;
  var siteUrl = document.getElementById("siteUrl").value;

  var bookmark = {
    name: siteName,
    url: siteUrl
  };

  if (localStorage.getItem("bookmarks") === null) {
    var bookmarks = [];

    bookmarks.push(bookmark);

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  } else {
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

    bookmarks.push(bookmark);

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
}

function deleteBookmark(url) {
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

  for (var i = 0; i < bookmarks - length; i++) {
    if (bookmarks[i].url === url) {
      bookmarks.splice(i, 1);
    }
  }
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

(function fetchBookmarks() {
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

  var bookmarksResults = document.getElementById("bookmarksResults");

  bookmarksResults.innerHTML = "";

  for (var i = 0; i < bookmarks.length; i++) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML += `
    <div class="card bg-light text-dark card-body">
      <h4>${name}
      <button class="btn btn-default" ><a href="${url}" target="_blank">Visit</a></button>
      <a onclick="deleteBookmark(${url})" class="btn btn-danger" href="#">X</a>
      </h4>

    </div>
    `;
  }
})();
