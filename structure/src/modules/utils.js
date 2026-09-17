// src/modules/utils.js

export function calculatePercentage(completed, total) {
    if (total === 0) return 0;
    return Math.round((completed / total) * 100);
}

export function generateId() {
    return Math.random().toString(36).substring(2, 9);
}