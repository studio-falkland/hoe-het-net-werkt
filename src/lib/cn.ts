/**
 * Combine classes into a single string
 * @param classes - The classes to combine
 * @returns The combined classes
 */
export default function cn(...classes: (string | undefined | boolean | number | null)[]) {
    return classes.filter(Boolean).join(' ');
}
