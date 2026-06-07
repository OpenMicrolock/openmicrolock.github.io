const preview = document.querySelector("[data-lock-preview]");
const header = document.querySelector(".site-header");

if (header) {
  let lastScrollY = window.scrollY;
  let revealTimeout = null;

  const showHeader = () => {
    document.body.classList.remove("header-hidden");

    if (revealTimeout) window.clearTimeout(revealTimeout);
    if (window.scrollY > 120) {
      revealTimeout = window.setTimeout(() => {
        document.body.classList.add("header-hidden");
      }, 4200);
    }
  };

  const hideHeader = () => {
    if (revealTimeout) window.clearTimeout(revealTimeout);
    if (window.scrollY > 120) {
      document.body.classList.add("header-hidden");
    }
  };

  window.addEventListener(
    "scroll",
    () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      if (currentScrollY <= 24) {
        showHeader();
      } else if (delta > 8) {
        hideHeader();
      } else if (delta < -8) {
        showHeader();
      }

      lastScrollY = currentScrollY;
    },
    { passive: true }
  );

  header.addEventListener("mouseenter", showHeader);
  header.addEventListener("focusin", showHeader);
}

if (preview) {
  const card = preview.querySelector("[data-lock-card]");
  const stateLabel = preview.querySelector("[data-lock-state]");
  const updatedLabel = preview.querySelector("[data-lock-updated]");
  const track = preview.querySelector("[data-slide-track]");
  const thumb = preview.querySelector("[data-slide-thumb]");
  const slideText = preview.querySelector("[data-slide-text]");
  const autoLock = preview.querySelector("[data-auto-lock]");
  const countdownLabel = preview.querySelector("[data-countdown]");
  const countdownBar = preview.querySelector("[data-countdown-bar]");

  let unlocked = false;
  let dragging = false;
  let startX = 0;
  let offset = 0;
  let countdownTimer = null;
  let countdownRemaining = 5;

  const maxOffset = () => {
    const trackRect = track.getBoundingClientRect();
    const thumbRect = thumb.getBoundingClientRect();
    return Math.max(0, trackRect.width - thumbRect.width - 8);
  };

  const setOffset = (nextOffset, animate = false) => {
    offset = Math.max(0, Math.min(nextOffset, maxOffset()));
    track.classList.toggle("is-animating", animate);
    track.style.setProperty("--slide-x", `${offset}px`);
    track.style.setProperty("--slide-progress", `${offset + 46}px`);
  };

  const updateCountdown = () => {
    countdownLabel.textContent = `${countdownRemaining}s`;
    countdownBar.style.setProperty("--countdown-progress", `${(countdownRemaining / 5) * 100}%`);
  };

  const stopCountdown = () => {
    if (countdownTimer) window.clearInterval(countdownTimer);
    countdownTimer = null;
    autoLock.hidden = true;
  };

  const lock = () => {
    unlocked = false;
    preview.classList.remove("is-unlocked");
    card.classList.remove("is-unlocked");
    stateLabel.textContent = "LOCKED";
    slideText.textContent = "Swipe right to unlock";
    thumb.textContent = "→";
    updatedLabel.textContent = "Updated just now";
    track.hidden = false;
    stopCountdown();
    setOffset(0, true);
  };

  const startCountdown = () => {
    stopCountdown();
    countdownRemaining = 5;
    autoLock.hidden = false;
    updateCountdown();

    countdownTimer = window.setInterval(() => {
      countdownRemaining -= 1;
      updateCountdown();

      if (countdownRemaining <= 0) {
        lock();
      }
    }, 1000);
  };

  const unlock = () => {
    slideText.textContent = "Unlocking door...";
    thumb.textContent = "→";
    setOffset(maxOffset(), true);

    window.setTimeout(() => {
      unlocked = true;
      preview.classList.add("is-unlocked");
      card.classList.add("is-unlocked");
      stateLabel.textContent = "UNLOCKED";
      updatedLabel.textContent = "Updated just now";
      track.hidden = true;
      setOffset(0, false);
      startCountdown();
    }, 360);
  };

  const runAction = () => {
    if (!unlocked) unlock();
  };

  const completeDrag = () => {
    if (offset >= maxOffset() * 0.85) {
      runAction();
      return;
    }

    setOffset(0, true);
  };

  const onPointerDown = (event) => {
    dragging = true;
    startX = event.clientX;
    track.classList.remove("is-animating");
    track.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event) => {
    if (!dragging) return;
    setOffset(event.clientX - startX);
  };

  const onPointerUp = () => {
    if (!dragging) return;
    dragging = false;
    completeDrag();
  };

  track.addEventListener("pointerdown", onPointerDown);
  track.addEventListener("pointermove", onPointerMove);
  track.addEventListener("pointerup", onPointerUp);
  track.addEventListener("pointercancel", onPointerUp);
  track.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    runAction();
  });

  lock();
}
