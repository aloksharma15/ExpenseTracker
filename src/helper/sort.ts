export const sortDescByDate = (data: any) => {
    return data.slice().sort((a: any, b: any) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
      
        return dateB - dateA;
      })

    
}