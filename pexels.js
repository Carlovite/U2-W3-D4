const funz = function () {
  const HideButton = document.querySelectorAll(
    ".btn-group button:nth-of-type(2)"
  );
  const HideButtonAsArray = Array.from(HideButton);
  console.log(HideButton);
  console.log(HideButtonAsArray);
  for (let i = 0; i < HideButtonAsArray.length; i++) {
    HideButtonAsArray[i].addEventListener("click", function () {
      const cards = document.getElementsByClassName("card");
      cards[i].classList.add("d-none");
      // }
    });
  }
};

const getEvents = function () {
  fetch("https://api.pexels.com/v1/search?query=Music", {
    headers: {
      Authorization: "wLDBSl3baVlPShBJNqqIJAlta1viBQzgx2O42cY14JevQiDThJQijvrW",
    },
  })
    .then((res) => {
      console.log("Response ottenuta dalla GET", res);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel contattare il server");
      }
    })
    .then((events) => {
      console.log("EVENTS", events);
      const LoadPics = function () {
        const LoadButton = document.getElementById("button-1");
        // console.log(LoadButton);
        LoadButton.addEventListener("click", function () {
          console.log("bravo hai premuto un pulsante");
          const ArrayDiv = document.getElementsByClassName(
            "card mb-4 shadow-sm"
          );
          for (i = 0; i < ArrayDiv.length; i++) {
            ArrayDiv[i].innerHTML = `<img
              src="${events.photos[i].src.landscape}"
              class="bd-placeholder-img card-img-top"
            />
            <div class="card-body">
              <h5 class="card-title">Lorem Ipsum</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div
                class="d-flex justify-content-between align-items-center"
              >
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Hide
                  </button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>`;
          }
          funz();
        });
      };
      LoadPics();
    })
    .catch((err) => {
      console.log("Si è verificato un errore:", err);
    });
};

getEvents();

const getEvents2 = function () {
  fetch("https://api.pexels.com/v1/search?query=games", {
    headers: {
      Authorization: "wLDBSl3baVlPShBJNqqIJAlta1viBQzgx2O42cY14JevQiDThJQijvrW",
    },
  })
    .then((res) => {
      console.log("Response ottenuta dalla GET", res);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel contattare il server");
      }
    })
    .then((events) => {
      console.log("EVENTS", events);

      const LoadPics2 = function () {
        const LoadNew = document.getElementById("button-2");
        LoadNew.addEventListener("click", function () {
          console.log("bravo hai premuto un pulsante");
          const ArrayDiv = document.getElementsByClassName(
            "card mb-4 shadow-sm"
          );
          for (i = 0; i < ArrayDiv.length; i++) {
            ArrayDiv[i].innerHTML = `<img
          src="${events.photos[i].src.landscape}"
          class="bd-placeholder-img card-img-top"
        />
        <div class="card-body">
          <h5 class="card-title">Lorem Ipsum</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
          <div
            class="d-flex justify-content-between align-items-center"
          >
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                Hide
              </button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>`;
          }
          funz();
        });
      };
      LoadPics2();
    })

    .catch((err) => {
      console.log("Si è verificato un errore:", err);
    });
};
getEvents2();

funz();
