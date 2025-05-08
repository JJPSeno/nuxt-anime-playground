<script setup lang="ts">

    const dice = useTemplateRef<HTMLElement | null>('dice');
    const rollBtn = useTemplateRef<HTMLButtonElement | null>('roll-btn');
    const rotateBtn = useTemplateRef<HTMLElement | null>('rotate-btn');
    const dragArea = useTemplateRef<HTMLElement | null>('drag-area');

    const faceRotations: Record<number, string> = {
      1: 'rotateX(0deg) rotateY(0deg)',
      2: 'rotateX(0deg) rotateY(180deg)',
      3: 'rotateX(0deg) rotateY(-90deg)',
      4: 'rotateX(0deg) rotateY(90deg)',
      5: 'rotateX(-90deg) rotateY(0deg)',
      6: 'rotateX(90deg) rotateY(0deg)',
    };

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotation = { x: 0, y: 0 };

    function rollDice() {
      if (!dice.value || !rollBtn.value) return;

      rollBtn.value.disabled = true;
      dice.value.classList.remove('rolling');

      const randNum = Math.floor(Math.random() * 6) + 1;
      document.documentElement.style.setProperty('--dice-rotation', faceRotations[randNum]);

      // Force reflow
      void dice.value.offsetWidth;

      dice.value.classList.add('rolling');

      setTimeout(() => {
        if (dice.value && rollBtn.value){
          dice.value.style.transform = faceRotations[randNum];
          rollBtn.value.disabled = false;
        }
      }, 2000);
    }

    function startDrag(e: MouseEvent) {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    }

    function drag(e: MouseEvent) {
      if (!isDragging || !dice.value) return;

      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y,
      };

      rotation.y += deltaMove.x * 0.5;
      rotation.x -= deltaMove.y * 0.5;

      dice.value.style.transform = `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    }

    function stopDrag() {
      isDragging = false;
    }

    function toggleRotate() {
      if (!rotateBtn.value || !dragArea.value || !dice.value) return;

      dragArea.value.classList.toggle('active');
      if (dragArea.value.classList.contains('active')) {
        rotateBtn.value.textContent = 'Stop Rotating';

        const transform = dice.value.style.transform;
        const xMatch = transform.match(/rotateX\(([-\d.]+)deg\)/);
        const yMatch = transform.match(/rotateY\(([-\d.]+)deg\)/);

        rotation.x = xMatch ? parseFloat(xMatch[1]) : 0;
        rotation.y = yMatch ? parseFloat(yMatch[1]) : 0;
      } else {
        rotateBtn.value.textContent = 'Manual Rotate';
      }
    }

    onMounted(() => {
      if (dice.value){
        dice.value.style.transform = 'rotateX(0deg) rotateY(0deg)';
      }

      setTimeout(rollDice, 500);
    });
</script>
<template>
  <main>
    <ClientOnly>
      <div
        ref="drag-area"
        class="drag-area"
        @mousedown="startDrag"
        @mousemove="drag"
        @mouseup="stopDrag"
        @mouseleave="stopDrag"
      />
      <div
        class="h-dvh w-full relative flex items-center justify-center bg-slate-900/95"
      >
        <div class="scene">
          <div ref="dice" class="dice">
            <!-- Face 1 (Front) - One dot -->
            <div class="face face-1">
              <div
                class="absolute w-4 h-4 bottom-2 right-2 bg-secondary"
              />
            </div>
            
            <!-- Face 2 (Back) - Two dots -->
            <div class="face face-2">
              <div
                class="absolute w-4 h-4 bottom-8 right-8 bg-secondary"
              />
              <div
                class="absolute w-4 h-4 bottom-2 right-2 bg-secondary"
              />
            </div>
            
            <!-- Face 3 (Right) - Three dots -->
            <div class="face face-3">
              <div
                class="absolute w-4 h-4 bottom-2 right-8 bg-secondary"
              />
              <div
                class="absolute w-4 h-4 bottom-2 right-2 bg-secondary"
              />
              <div
                class="absolute w-4 h-4 bottom-2 right-14 bg-secondary"
              />
            </div>
            
            <!-- Face 4 (Left) - Four dots -->
            <div class="face face-4">
              <div
                class="absolute w-1 h-10 bottom-0 right-2 bg-secondary"
              />
              <div
                class="absolute w-1 h-8 bottom-0 right-4 bg-secondary"
              />
              <div
                class="absolute w-1 h-6 bottom-0 right-6 bg-secondary"
              />
              <div
                class="absolute w-1 h-4 bottom-0 right-8 bg-secondary"
              />
            </div>
            
            <!-- Face 5 (Top) - Five dots -->
            <div class="face face-5">
              <h2
                class="absolute font-serif leading-[.6] text-3xl bottom-2 right-2 text-secondary"
              >
                V
              </h2>
            </div>
            
            <!-- Face 6 (Bottom) - Six dots -->
            <div class="face face-6">
              <div
                class="absolute w-1 h-[40%] bottom-3 right-1 bg-secondary"
              />
              <div
                class="absolute w-1 h-[50%] top-1 right-1 bg-secondary"
              />
              <div
                class="absolute w-[40%] h-1 bottom-1 right-3 bg-secondary"
              />
              <div
                class="absolute w-[50%] h-1 bottom-1 left-1 bg-secondary"
              />
              <div
                class="absolute w-2 h-2 bottom-0 right-0 bg-secondary"
              />
              <div
                class="absolute w-2 h-2 bottom-3 right-3 bg-secondary"
              />
            </div>
          </div>
        </div>
        <div class="controls">
          <button ref="roll-btn" id="roll-btn" @click="rollDice">Roll Dice</button>
          <button ref="rotate-btn" id="rotate-btn" @click="toggleRotate">Manual Rotate</button>
        </div>
      </div>

    </ClientOnly>
    <div
      class="h-dvh w-full bg-slate-600"
    >

    </div>
  </main>
</template>
<style lang="css" scoped>
    main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      perspective: 1000px;
      background-color: #f0f0f0;
      font-family: Arial, sans-serif;
      overflow: hidden;
      margin: 0;
    }

    .controls {
      position: absolute;
      bottom: 20px;
      display: flex;
      gap: 10px;
      z-index: 100;
    }

    button {
      padding: 8px 16px;
      background-color: #4a7bca;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #3a5d9e;
    }

    .scene {
      width: 200px;
      height: 200px;
      perspective: 600px;
      transform-style: preserve-3d;
    }

    .dice {
      width: 100%;
      height: 100%;
      position: relative;
      transform-style: preserve-3d;
      transition: transform 2s;
    }

    .dice.rolling {
      animation: rolling 2s;
    }

    @keyframes rolling {
      0% { transform: rotateX(0) rotateY(0) rotateZ(0); }
      25% { transform: rotateX(90deg) rotateY(180deg) rotateZ(45deg); }
      50% { transform: rotateX(270deg) rotateY(90deg) rotateZ(180deg); }
      75% { transform: rotateX(180deg) rotateY(270deg) rotateZ(270deg); }
      100% { transform: var(--dice-rotation); }
    }

    .face {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.1);
    }

    .dot {
      position: absolute;
      width: 30px;
      height: 30px;
      background-color: #222;
      border-radius: 50%;
    }

    /* Face 1 - Front */
    .face-1 {
      transform: translateZ(100px);
    }
    .face-1 .dot {
      /* Single dot in the center */
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    /* Face 2 - Back */
    .face-2 {
      transform: rotateY(180deg) translateZ(100px);
    }
    .face-2 .dot:nth-child(1) {
      top: 25%;
      left: 25%;
      transform: translate(-50%, -50%);
    }
    .face-2 .dot:nth-child(2) {
      top: 75%;
      left: 75%;
      transform: translate(-50%, -50%);
    }

    /* Face 3 - Right */
    .face-3 {
      transform: rotateY(90deg) translateZ(100px);
    }
    .face-3 .dot:nth-child(1) {
      top: 25%;
      left: 25%;
      transform: translate(-50%, -50%);
    }
    .face-3 .dot:nth-child(2) {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .face-3 .dot:nth-child(3) {
      top: 75%;
      left: 75%;
      transform: translate(-50%, -50%);
    }

    /* Face 4 - Left */
    .face-4 {
      transform: rotateY(-90deg) translateZ(100px);
    }
    .face-4 .dot:nth-child(1) {
      top: 25%;
      left: 25%;
      transform: translate(-50%, -50%);
    }
    .face-4 .dot:nth-child(2) {
      top: 25%;
      left: 75%;
      transform: translate(-50%, -50%);
    }
    .face-4 .dot:nth-child(3) {
      top: 75%;
      left: 25%;
      transform: translate(-50%, -50%);
    }
    .face-4 .dot:nth-child(4) {
      top: 75%;
      left: 75%;
      transform: translate(-50%, -50%);
    }

    /* Face 5 - Top */
    .face-5 {
      transform: rotateX(90deg) translateZ(100px);
    }
    .face-5 .dot:nth-child(1) {
      top: 25%;
      left: 25%;
      transform: translate(-50%, -50%);
    }
    .face-5 .dot:nth-child(2) {
      top: 25%;
      left: 75%;
      transform: translate(-50%, -50%);
    }
    .face-5 .dot:nth-child(3) {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .face-5 .dot:nth-child(4) {
      top: 75%;
      left: 25%;
      transform: translate(-50%, -50%);
    }
    .face-5 .dot:nth-child(5) {
      top: 75%;
      left: 75%;
      transform: translate(-50%, -50%);
    }

    /* Face 6 - Bottom */
    .face-6 {
      transform: rotateX(-90deg) translateZ(100px);
    }
    .face-6 .dot:nth-child(1) {
      top: 25%;
      left: 25%;
      transform: translate(-50%, -50%);
    }
    .face-6 .dot:nth-child(2) {
      top: 25%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .face-6 .dot:nth-child(3) {
      top: 25%;
      left: 75%;
      transform: translate(-50%, -50%);
    }
    .face-6 .dot:nth-child(4) {
      top: 75%;
      left: 25%;
      transform: translate(-50%, -50%);
    }
    .face-6 .dot:nth-child(5) {
      top: 75%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .face-6 .dot:nth-child(6) {
      top: 75%;
      left: 75%;
      transform: translate(-50%, -50%);
    }

    /* Drag to rotate feature */
    .drag-area {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 50;
      cursor: grab;
      display: none;
    }
    
    .drag-area.active {
      display: block;
    }

    .drag-area:active {
      cursor: grabbing;
    }

    /* Fade in animation for the dice */
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.9); }
      to { opacity: 1; transform: scale(1); }
    }

    .scene {
      animation: fadeIn 1s ease-out;
    }
</style>