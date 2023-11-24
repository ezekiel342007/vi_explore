// let pointer: HTMLDivElement = document.createElement("div");
// pointer.style.backgroundColor = "red";
// pointer.style.width = "20px";
// pointer.style.height = "20px";
// pointer.style.borderRadius = "10px";
// pointer.classList.add("pointer");
// pointer.style.position = "absolute";

// document.body.append(pointer);

// let x: number = 0;
// let y: number = 0;

// document.onkeydown = (e) => {
//   if (e.key === "l")
//     pointer.style.left = (x += 5) + "px";
//   else if (e.key === "h")
//     pointer.style.right = (x -= 5) + "px";
//   else if (e.key === "k")
//     pointer.style.top = (x -= 5) + "px";
//   else if (e.key === "j")
//     pointer.style.bottom = (x += 5) + "px";
// }
//
let pointer: HTMLDivElement = document.createElement("div");
pointer.id = "draggable";
pointer.setAttribute("tabindex", "0");
pointer.style.backgroundColor = "red";
pointer.style.width = "20px";
pointer.style.height = "20px";
pointer.style.borderRadius = "10px";
pointer.classList.add("pointer");
pointer.style.left = "100px";
pointer.style.top = "100px";
pointer.style.position = "absolute";

document.body.append(pointer);

function click() {
  const pointerPosition: DOMRect = pointer.getBoundingClientRect();

  const centerX: number = pointerPosition.left + pointerPosition.width / 2;
  const centerY: number = pointerPosition.top + pointerPosition.height / 2;

  const elementUnder: Element | null = document.elementFromPoint(centerX, centerY);
  console.log(elementUnder);
}

// let left: number = pointer.offsetLeft;
// let top1: number = pointer.offsetTop;

let xOffset: number = pointer.offsetLeft;
let yOffset: number = pointer.offsetTop;
document.onkeydown = (e) => {
  // if (e.key === "l")
  //   pointer.style.left = (left += 5) + "px";
  // else if (e.key === "h")
  //   pointer.style.left = (left -= 5) + "px";
  // else if (e.key === "j")
  //   pointer.style.top = (top1 += 5) + "px";
  // else if (e.key === "k")
  //   pointer.style.top = (top1 -= 5) + "px";
  switch (e.key) {
    case "j":
      yOffset += 10;
      break;
    case "k":
      yOffset -= 10;
      break;
    case "l":
      xOffset += 10;
      break;
    case "h":
      xOffset -= 10;
      break;
    case "L":
      click();
      break;

    default:
      break;
  }
  pointer.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
};
