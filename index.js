const { createClient } = supabase

const supabaseUrl = 'https://cecpqnipsjocjrggycon.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlY3Bxbmlwc2pvY2pyZ2d5Y29uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3MDM5NjcsImV4cCI6MjAyNjI3OTk2N30.TvYs7xbE4Fn2Quus8utQBSFHYmtxEEjEX8raYjFtNlU'
const _supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks(){
    let { data: books, error } = await _supabase
        .from('books')
        .select('*')

    for(let book of books){
        let bookList = document.getElementById('books');
        bookList.innerHTML += `<tr>
            <td>${book.id}</td>
            <td>${book.created_at}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.ISBN}</td>
        </tr>`
    }
}

getBooks();