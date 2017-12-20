<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'diary');

/** MySQL database username */
define('DB_USER', 'diary');

/** MySQL database password */
define('DB_PASSWORD', 'XeeScrjA');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'B*R$],Oi`NA|LmLL!yTb8?A2G C/1C?O4} R*9->DRJ&o:yfPs2osr@2En?k%wRI');
define('SECURE_AUTH_KEY',  'UO!x:0VRe2qr!6 y2)KNL2)xyiKcPlt~qV01F~XU#d0<hWt9=1:o4IzXY^&-z;[V');
define('LOGGED_IN_KEY',    '/Oq=`6g)yOgVK%${+3{cKy*</&b|,/,w0aX__^|FW{8TZrg1IJ/g;%0c1LeIGH-y');
define('NONCE_KEY',        'An,~q{3(HDyuWx<NS5*DCRiDmPbR&3)!JCp<h(r4./ Bm:[HLVo($2_!9dH3hhfM');
define('AUTH_SALT',        ';s|p%^iW=tp<pwP8nSK7/AY;|v}Ntc}*i:J`)e0/J:OHtV5DJQ}T#I+qJCTe+FQk');
define('SECURE_AUTH_SALT', 'OK#K{oc[ rl#5 9hGk&>=Tg2P/pH.}XJaS]nU_]P%a+G)I)adPF slKMM{7sIZT7');
define('LOGGED_IN_SALT',   '/_BB:-&,/KfVw^ys;R%d( kIp{kk>GW+|FPS$cnkes4C_d9se^}/|NEi0~6a)m)k');
define('NONCE_SALT',       'na:n1-V$Xt%H9YgEs=u*;`wEG}eMN7t7twnV2G~rQZ3+TbmtotDl*O$V*Tm/v-jV');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
