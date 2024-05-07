import "./RecordingForm.css";

export default function RecForm() {
  //   const [animating, setAnimating] = useState(false);

  //   const handleNextClick = () => {
  //     if (animating) return false;
  //     setAnimating(true);

  //     // Get current and next fieldsets
  //     const current_fs = document.querySelector(".current");
  //     const next_fs = current_fs.nextElementSibling;

  //     // Activate next step on progressbar
  //     const progressbar = document.querySelectorAll("#progressbar li");
  //     progressbar[
  //       Array.from(current_fs.parentNode.children).indexOf(next_fs)
  //     ].classList.add("active");

  //     // Show the next fieldset
  //     next_fs.style.display = "block";

  //     // Hide the current fieldset with style
  //     let left, opacity, scale;
  //     current_fs.animate(
  //       { opacity: 0 },
  //       {
  //         step: (now, mx) => {
  //           // Scale current_fs down to 80%
  //           scale = 1 - (1 - now) * 0.2;
  //           // Bring next_fs from the right(50%)
  //           left = now * 50 + "%";
  //           // Increase opacity of next_fs to 1 as it moves in
  //           opacity = 1 - now;
  //           current_fs.style.transform = "scale(" + scale + ")";
  //           current_fs.style.position = "absolute";
  //           next_fs.style.left = left;
  //           next_fs.style.opacity = opacity;
  //         },
  //         duration: 800,
  //         complete: () => {
  //           current_fs.style.display = "none";
  //           setAnimating(false);
  //         },
  //         easing: "easeInOutBack",
  //       }
  //     );
  //   };

  //   const handlePreviousClick = () => {
  //     if (animating) return false;
  //     setAnimating(true);

  //     // Get current and previous fieldsets
  //     const current_fs = document.querySelector(".current");
  //     const previous_fs = current_fs.previousElementSibling;

  //     // De-activate current step on progressbar
  //     const progressbar = document.querySelectorAll("#progressbar li");
  //     progressbar[
  //       Array.from(current_fs.parentNode.children).indexOf(current_fs)
  //     ].classList.remove("active");

  //     // Show the previous fieldset
  //     previous_fs.style.display = "block";

  //     // Hide the current fieldset with style
  //     let left, opacity, scale;
  //     current_fs.animate(
  //       { opacity: 0 },
  //       {
  //         step: (now, mx) => {
  //           // Scale previous_fs from 80% to 100%
  //           scale = 0.8 + (1 - now) * 0.2;
  //           // Take current_fs to the right(50%) - from 0%
  //           left = (1 - now) * 50 + "%";
  //           // Increase opacity of previous_fs to 1 as it moves in
  //           opacity = 1 - now;
  //           previous_fs.style.transform = "scale(" + scale + ")";
  //           previous_fs.style.opacity = opacity;
  //           current_fs.style.left = left;
  //         },
  //         duration: 800,
  //         complete: () => {
  //           current_fs.style.display = "none";
  //           setAnimating(false);
  //         },
  //         easing: "easeInOutBack",
  //       }
  //     );
  //   };
  return (
    <section className="RecodingFormSec">
      <form id="msform">
        <ul id="progressbar">
          <li class="active">Account Setup</li>
          <li>Social Profiles</li>
          <li>Personal Details</li>
        </ul>

        <fieldset>
          <h2 class="fs-title">Create your account</h2>
          <h3 class="fs-subtitle">This is step 1</h3>
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="pass" placeholder="Password" />
          <input type="password" name="cpass" placeholder="Confirm Password" />
          <input
            type="button"
            name="next"
            class="next action-button"
            value="Next"
          />
        </fieldset>
        {/* <button className="next" onClick={handleNextClick}>
          Next
        </button>
        <button className="previous" onClick={handlePreviousClick}>
          Previous
        </button> */}
        <fieldset>
          <h2 class="fs-title">Social Profiles</h2>
          <h3 class="fs-subtitle">Your presence on the social network</h3>
          <input type="text" name="twitter" placeholder="Twitter" />
          <input type="text" name="facebook" placeholder="Facebook" />
          <input type="text" name="gplus" placeholder="Google Plus" />
          <input
            type="button"
            name="previous"
            class="previous action-button"
            value="Previous"
          />
          <input
            type="button"
            name="next"
            class="next action-button"
            value="Next"
          />
        </fieldset>
        {/* <button className="next" onClick={handleNextClick}>
          Next
        </button>
        <button className="previous" onClick={handlePreviousClick}>
          Previous
        </button> */}
        <fieldset>
          <h2 class="fs-title">Personal Details</h2>
          <h3 class="fs-subtitle">We will never sell it</h3>
          <input type="text" name="fname" placeholder="First Name" />
          <input type="text" name="lname" placeholder="Last Name" />
          <input type="text" name="phone" placeholder="Phone" />
          <textarea name="address" placeholder="Address"></textarea>
          <input
            type="button"
            name="previous"
            class="previous action-button"
            value="Previous"
          />
          <a
            href="https://twitter.com/GoktepeAtakan"
            class="submit action-button"
            target="_top"
          >
            Submit
          </a>
        </fieldset>
      </form>
    </section>
  );
}
