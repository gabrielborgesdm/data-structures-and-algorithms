function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(box => console.log(box))
    boxes2.forEach(box => console.log(box))
}

/**
 * Rule 3 - Different terms for inputs
 * Each input will have it's own o notation, therefore this one should be:
 * O(a + b) => O(m + n) => O(boxes + boxes2)
 */