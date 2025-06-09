   function toggleLightMode() {
      var element = document.body;
      element.classList.toggle("light-mode");
      
      // Save the user's preference
      if (element.classList.contains("light-mode")) {
        localStorage.setItem("themeMode", "light");
      } else {
        localStorage.setItem("themeMode", "dark");
      }
    }

    // Check for saved theme preference on page load (defaults to dark)
    if (localStorage.getItem("themeMode") === "light") {
      document.body.classList.add("light-mode");
    }
