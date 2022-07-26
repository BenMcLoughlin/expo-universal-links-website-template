/*
export default function handler(req, res) {
    res.status(200).json({
        applinks: {
            details: [
                {
                    appIDs: ['QLN6949UL2.com.universal-links-test.app'],
                    components: [
                        {
                            '#': 'no_universal_links',
                            exclude: true,
                            comment:
                                'Matches any URL whose fragment equals no_universal_links and instructs the system not to open it as a universal link'
                        },
                        {
                            '/': '/app/*',
                            comment: 'Matches any URL whose path starts with /app/'
                        }
                    ]
                }
            ]
        },
        webcredentials: {
            apps: ['QLN6949UL2.com.universal-links-test.app']
        }
    });
}
*/

export default function handler(req, res) {
    res.status(200).json({
        applinks: {
            details: [
                {
                    appIDs: ['QLN6949UL2.com.shophopper.app'],
                    components: [
                        {
                            '#': 'no_universal_links',
                            exclude: true,
                            comment:
                                'Matches any URL whose fragment equals no_universal_links and instructs the system not to open it as a universal link'
                        },
                        {
                            '/': '/shophopper-app/*',
                            comment: 'Matches any URL whose path starts with /shophopper/'
                        }
                    ]
                }
            ]
        },
        webcredentials: {
            apps: ['QLN6949UL2.com.shophopper.app']
        }
    });
}
