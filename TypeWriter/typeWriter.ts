export class Typewriter {
    _currentTypingText = "";
    currentTypingIndex = 0;
    isTyping = false;
    typingSpeed = 100;
    typingDelay = 1000;
    backspaceSpeed = 25;
    backspaceDelay = 2000;
    stringIndex = 0;
    cursorFlashInterval: any;
    isCursorVisible = true;
    stringToType: string[] = [
        "a full-stack web and app developer.",
        "exploring data science and AI advancements.",
        "driven to learn new technologies.",
        "innovative, creative, and passionate.",
        "with years of experience across a range of languages, frameworks, and tools.",
        "a software engineer and data scientist.",
        "hard-working, dedicated, organized, and detail-oriented.",
        "a student, teacher, and leader.",
        "I work well with others, and I'm a team player.",
    ];

    constructor() { }

    start() {
        this.initTypingAnimation();
        this.flashCursor();
    }

    initTypingAnimation() {
        setTimeout(() => this.typeString(), this.typingDelay);
    }

    typeString() {
        this.isTyping = true;
        if (this.currentTypingIndex < this.stringToType[this.stringIndex].length) {
            this.currentTypingText += this.stringToType[this.stringIndex][this.currentTypingIndex++];
            setTimeout(() => this.typeString(), this.typingSpeed);
        } else {
            this.isTyping = false;
            setTimeout(() => this.startBackspacing(), this.backspaceDelay);
        }
    }

    startBackspacing() {
        if (this.currentTypingIndex > 0) {
            this.currentTypingText = this.stringToType[this.stringIndex].substring(0, --this.currentTypingIndex);
            setTimeout(() => this.startBackspacing(), this.backspaceSpeed);
        } else {
            this.stringIndex = (this.stringIndex + 1) % this.stringToType.length;
            this.initTypingAnimation();
        }
    }

    flashCursor() {
        // Clear any existing interval to avoid duplicates
        clearInterval(this.cursorFlashInterval);

        const cursorElement = document.querySelector('.Cursor-Line') as HTMLElement;
        cursorElement.style.fontSize = '1.3em';

        this.cursorFlashInterval = setInterval(() => {
            this.isCursorVisible = !this.isCursorVisible;
            if (cursorElement) {
                cursorElement.style.opacity = this.isCursorVisible ? '1' : '0';
            }
        }, 500);
    }

    public get currentTypingText() {
        return this._currentTypingText;
    }
    public set currentTypingText(value) {
        this._currentTypingText = value;
    }
}

