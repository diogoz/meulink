export const getStorageLink = async(key) => {
    const myLinks = await localStorage.getItem(key);
    let linksSaves = JSON.parse(myLinks) || [];
    return linksSaves;
}

export const saveLink = async (key, newLink) => {
    let linkStorage = await getStorageLink(key);
    const hasLink = linkStorage.some(link => link.id === newLink.id)
    if (hasLink){
        console.log('esse link já existe na sua lista');
        return;
    }
    linkStorage.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linkStorage));
    console.log('link salvo com sucesso');
}

export const deleteLinkStorage = async (links, id) => {
    let myLinks = links.filter(item => {
        return (item.id !== id);
    })
    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));
    return myLinks;
}