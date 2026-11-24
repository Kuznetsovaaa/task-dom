export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const el = document.createElement(tag);
        el.textContent = content;
        document.body.appendChild(el);
    }
}

export function generateTree(childrenCount, level, currentLevel = 1) {
    const div = document.createElement('div');
    div.className = `item_${currentLevel}`;

    if (currentLevel < level) {
        for (let i = 0; i < childrenCount; i++) {
            div.appendChild(
                generateTree(childrenCount, level, currentLevel + 1),
            );
        }
    }
    return div;
}

export function replaceNodes() {
    const tree = generateTree(2, 3);
    const nodes = Array.from(tree.querySelectorAll('.item_2'));

    nodes.forEach((node) => {
        const section = document.createElement('section');
        section.className = 'item_2';

        while (node.firstChild) {
            section.appendChild(node.firstChild);
        }

        node.parentNode.replaceChild(section, node);
    });

    return tree;
}
