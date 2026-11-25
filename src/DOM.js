export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const element = document.createElement(tag);
        element.textContent = content;
        document.body.appendChild(element);
    }
}

export function generateTree(childrenCount, level) {
    const currentLevel = 4 - level;

    const div = document.createElement('div');
    div.className = `item_${currentLevel}`;

    if (level > 1) {
        for (let i = 0; i < childrenCount; i++) {
            div.appendChild(generateTree(childrenCount, level - 1));
        }
    }

    return div;
}

export function replaceNodes() {
    const tree = generateTree(2, 3);
    const nodesToReplace = Array.from(tree.querySelectorAll('.item_2'));

    nodesToReplace.forEach((node) => {
        const section = document.createElement('section');
        section.className = node.className;

        while (node.firstChild) {
            section.appendChild(node.firstChild);
        }

        node.parentNode.replaceChild(section, node);
    });

    return tree;
}
