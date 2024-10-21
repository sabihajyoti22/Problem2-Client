export default {
  install: (app: any) => {
    app.config.globalProperties.$errorCheck = (field: string, value: string) => {
      switch (field) {
        case 'email':
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
        case 'mobile':
          return /^(\+88)?01\d{9}$/.test(value)
      }
    }
  }
}