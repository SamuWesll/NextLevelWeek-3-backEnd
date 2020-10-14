import Orphanages from "../model/Orphanages";
import Images from '../view/images_view';

export default {
    render(orphanage: Orphanages) {
        return {
            id: orphanage.id,
            name: orphanage.name,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about: orphanage.about,
            instructions: orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            open_on_weekends: orphanage.open_on_weekends,
            images: Images.renderMany(orphanage.images)
        };
    },

    renderMany(orphanages: Array<Orphanages>) {
        return orphanages.map(orphanage => this.render(orphanage))
    }
}