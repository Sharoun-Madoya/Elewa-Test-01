// viewModels/BrandsViewModel.ts
//Intermideary between Brand of footer in Views and BrandItem in ModelData
import {BrandsItem} from "../modelsData/brandprops";

export class BrandsViewModel {
    private _brands: BrandsItem;

    constructor(brands: BrandsItem) {
        this._brands = brands;
    }
//is used to access the brands data
    get brands(): BrandsItem {
        return this._brands;
    }
////is used to update the brands data
    updateBrands(updatedBrands: BrandsItem) {
        this._brands = { ...this._brands, ...updatedBrands };
    }
}
