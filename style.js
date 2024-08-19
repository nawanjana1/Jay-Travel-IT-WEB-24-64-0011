//javascript code
document.addEventListener("DOMContentLoaded",function()
{
    const hasVisited = localStorage.getItem("hasvisited");

  if(!hasVisited) {
    alert("Welcome to Jay Tours Website!");

    localStorage.setItem("hasvisited", "true");
  }  
});

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("assistantModal");
    var btn = document.getElementById("assistantButton");
    var closeBtn = document.getElementsByClassName("close-btn")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

   closeBtn.onclick = function() {
    modal.style.display = "none";
   }
   window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
   }

});

function handleOption(option) {
    alert(`You selected: ${option}`);
    document.getElementById("assistantModal").style.display = "none";
}

function toggleMore(element) {
    var dots = element.previousElementSibling.previousElementSibling;
    var moreContent = element.previousElementSibling;

    if (moreContent.style.display === "none" || moreContent.style.display ===""){
        dots.style.display = "none";
        moreContent.style.display = "inline";
        element.textContent = "less";
    } else {
        dots.style.display = "inline";
        moreContent.style.display = "none";
        element.textContent = "more";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".nav-link");
    const currentUrl = window.location.href;

    links.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});




// jQuery code
$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        let isValid = true;
        $('input[required]').each(function() {
            if ($(this).val() === '') {
                isValid = false;
                $(this).addClass('is-invalid');
            } else {
                $(this).removeClass('is-invalid');
            }
        });

        if (isValid) {
            alert('Form Submitted Successfully!');
            $(this).trigger("reset");
        } else {
            alert('Please Fill In all Required Fields.');
        }
    });
});