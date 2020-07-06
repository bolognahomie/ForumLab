console.log('ping')


$('.f-click').on('click', (e) => {
    let icon = $(e.target).attr('icon')
    $('#f').val(icon)
})
$('.c-click').on('click', (e) => {
    let icon = $(e.target).attr('icon')
    $('#c').val(icon)
})

$('.iconPackModalBtn').on('click', e => {
    $('#uploadModal').modal('show')
    console.log('ping')
})