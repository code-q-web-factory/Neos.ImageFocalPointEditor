import manifest from '@neos-project/neos-ui-extensibility';
import ImageFocalPointEditor from './ImageFocalPointEditor';

manifest('JvMTECH.Neos.ImageFocalPointEditor:ImageFocalPointEditor', {}, globalRegistry => {
    const editorsRegistry = globalRegistry.get('inspector').get('editors');
    editorsRegistry.set('JvMTECH.Neos.ImageFocalPointEditor/ImageFocalPointEditor', {
        component: ImageFocalPointEditor
    });
});
