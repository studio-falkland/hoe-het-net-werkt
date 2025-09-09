/**
 * Sort an array into two arrays based on a given predicate function
 */
export default function partition<T>(array: T[], predicate: (item: T) => boolean): [T[], T[]] {
    // Reduce the array into a tuple of two arrays
    return array.reduce<[T[], T[]]>((acc, item) => {
        // Push the item into the appropriate array based on the predicate
        acc[predicate(item) ? 0 : 1].push(item);

        // Return the accumulator
        return acc;
    }, [[], []]);
}
