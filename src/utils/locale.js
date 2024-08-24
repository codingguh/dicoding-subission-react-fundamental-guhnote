const appPage ={
    id:{
        title:"CatanTeg",
        homepage:"Halaman Utama",
        headerPageNotFound: 'Maaf Terjadi Kesalahan',
        messagePageNotFound:'Halaman Yang anda tuju tidak ditemukan silahkan kembali ke ',
        titleDeleteNote:'Hapus Catatan Ini',
        messageDelete:'Apakah Anda yakin ingin menghapus catatan ini?',
        delete:'Hapus',
        noDelete:'Tidak Jangan di hapus'
    },
    en:{
        title:"Noteg",
        homepage:"homepage",
        headerPageNotFound: 'Oops, an error occurred!',
        messagePageNotFound:'The page you are looking for was not found. Please return to',
        titleDeleteNote:'Delete This Note',
        messageDelete:'Are you sure?, Do you want to delete this note.',
        delete:'Delete',
        noDelete:"No Don't delete it"
    }
}

const loginPage = {
    id: {
      header: 'Selamat Datang',
      footer: 'Belum punya akun?',
      footerRegisterLink: 'Buat Akun'
    },
    en: {
      header: 'Welcome back!',
      footer: 'Don\'t have an account?',
      footerRegisterLink: 'Create Account'
    }
  }
  
  const registerPage = {
    id: {
      header: 'Registrasi',
      footer: 'Sudah punya akun?',
      footerLoginLink: 'Login disini',
      msg: {
        registerSuccess: 'Akun berhasil dibuat. Silahkan login.'
      }
    },
    en: {
      header: 'Signup',
      footer: 'Already have an account?',
      footerLoginLink: 'Login here',
      msg: {
        registerSuccess: 'User created successfully.'
      }
    }
  }

  const content = {
    appPage,
    loginPage,
    registerPage,
  }

  export {
    appPage,
    loginPage,
    registerPage,
  }
  
  export default content