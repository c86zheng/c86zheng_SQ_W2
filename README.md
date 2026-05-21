# w2_ex02

## Project Title

**w2_ex02 – Sushi Platform Adventure**

A small 2D platform game created using p5.js. Players control a sushi character to move, jump, and explore platforms placed throughout the scene. Some platforms are intentionally hidden or narrow, encouraging exploration and precise movement.

---

## Setup and Interaction Instructions

### Setup

1. Download or clone the project files.

2. Keep the project structure as:

```text
w2_ex02/
│
├── index.html
├── sketch.js
└── assets/
    └── images/
        ├── sushi.png
        └── sushibg.png
```

3. Open the project using a local server environment.

4. Run:

```text
index.html
```

---

### Interaction Instructions

| Action | Control |
|---------|---------|
| Move Left | A / Left Arrow |
| Move Right | D / Right Arrow |
| Jump | W / Up Arrow |
| Debug Mouse Coordinates | K |

Players control the sushi character using keyboard inputs.

The game includes:

- Gravity-based movement
- Platform collision detection
- Jump mechanics
- Hidden and narrow platforms
- Screen boundary constraints

Press **K** during gameplay to output mouse coordinates into the browser console for debugging and level placement.

---

## Assets

### Background Image

**File:**

```text
assets/images/sushibg.png
```

Generated using GenAI for this project.

Prompt used:

> Generate an 800×450 pixel-art image with a 2D side-view perspective featuring Mount Fuji in the background and a sushi restaurant in the foreground. Style reference: Super Mario forest environment.

---

### Sushi Character Sprite

**File:**

```text
assets/images/sushi.png
```

Generated using GenAI for this project.

Prompt used:

> Create a 32×32 pixel-art Gunkan Sushi sprite for a 2D game using Super Mario and Forest Fireman style references.

---

## References

[1] L. McCarthy, C. Reas, and B. Fry. *p5.js Reference*. Processing Foundation. Available: https://p5js.org/reference/

[2] OpenAI. *ChatGPT Image Generation*. OpenAI, 2026. Used for generation of pixel-art background and sushi sprite assets.

---

## In-text Citation Notes

Movement input uses p5.js keyboard handling functions including `keyIsDown()` and collision logic adapted from p5.js documentation [1].

Visual assets (`sushibg.png` and `sushi.png`) were generated using OpenAI image generation tools [2].

---

## GenAI Use Statement

I used GenAI. I used GenAI ChatGPT model GPT-5 for generating image assets (`sushibg.png`, `sushi.png`) and assisting with README documentation preparation.