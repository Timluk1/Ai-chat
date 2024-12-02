export function removeMarkdownSymbols(text: string): string {
    return text
        .replace(/[*_~`#>+\-=\[\]\(\)!\\]/g, "") // Удаляет общие markdown символы
        .replace(/!\[.*?\]\(.*?\)/g, "") // Удаляет картинки
        .replace(/\[.*?\]\(.*?\)/g, "") // Удаляет ссылки
        .replace(/```[\s\S]*?```/g, "") // Удаляет кодовые блоки
        .replace(/`.*?`/g, ""); // Удаляет inline-код
}