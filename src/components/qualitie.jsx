export const getClassesQualities = q => {
    let classes = 'badge m-1 bg-'
    classes += q.color
    return classes
}