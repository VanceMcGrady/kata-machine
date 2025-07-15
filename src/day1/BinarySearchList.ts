export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    while (lo < hi) {
        const m = Math.floor(lo + (hi - lo) / 2);
        const v = haystack[m];
        // make sure to include "half-open" intervals [lo, hi) include lo, exclude hi
        if (v === needle) {
            return true;
        } else if (v > needle) {
            hi = m;
        } else {
            lo = m + 1;
        }
    }
    return false;
}

// bs_list([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7);
