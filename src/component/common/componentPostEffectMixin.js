module.exports = {
    defaultOption: {
        // Post effect
        postEffect: {
            enable: false,

            bloom: {
                enable: true,
                intensity: 0.1
            },
            // depthOfField: {
            //     enable: false
            // },

            SSAO: {
                enable: false,
                radius: 1,
                // low, medium, high, ultra
                quality: 'medium',
                intensity: 1
            },
            FXAA: {
                enable: false
            }
        },

        // Temporal super sampling when the picture is still.
        temporalSuperSampling: {
            // Only enabled when postEffect is enabled
            enable: 'auto'
        }
    }
};