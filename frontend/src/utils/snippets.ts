import { Snippets } from "../types";

export const snippets: Snippets = {
    python: {
      beginner: [
        "print('Hello, World!')",
        "x = 10\nprint(x)"
      ],
      intermediate: [
        "def greet(name):\n    return f'Hello, {name}'\nprint(greet('Alice'))"
      ],
      expert: [
        "class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return '...' \n\nclass Dog(Animal):\n    def speak(self):\n        return 'Woof!'\n\nprint(Dog('Buddy').speak())"
      ]
    },
    javascript: {
      beginner: [
        "console.log('Hello, World!');",
        "let x = 10;\nconsole.log(x);"
      ],
      intermediate: [
        "function greet(name) {\n    return `Hello, ${name}`;\n}\nconsole.log(greet('Alice'));"
      ],
      expert: [
        "class Animal {\n    constructor(name) {\n        this.name = name;\n    }\n    speak() {\n        return '...';\n    }\n}\n\nclass Dog extends Animal {\n    speak() {\n        return 'Woof!';\n    }\n}\nconsole.log(new Dog('Buddy').speak());"
      ]
    },
    typescript: {
      beginner: [
        "console.log('Hello, World!');",
        "let x: number = 10;\nconsole.log(x);"
      ],
      intermediate: [
        "function greet(name: string): string {\n    return `Hello, ${name}`;\n}\nconsole.log(greet('Alice'));"
      ],
      expert: [
        "class Animal {\n    name: string;\n    constructor(name: string) {\n        this.name = name;\n    }\n    speak(): string {\n        return '...';\n    }\n}\n\nclass Dog extends Animal {\n    speak(): string {\n        return 'Woof!';\n    }\n}\nconsole.log(new Dog('Buddy').speak());"
      ]
    }
  };
  