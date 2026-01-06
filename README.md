# NoxTitan
Beast Mode Management

## Important: Logo Video Issue

⚠️ **Current Status**: The logo video file (`noxtitan-logo.mp4`) is currently empty/corrupted and needs to be replaced.

### How to Fix:

1. **Upload the new video file**:
   - Replace `noxtitan-logo.mp4` with your actual video file
   - Make sure the file is a valid MP4 video
   - The file should be optimized for web (compressed, reasonable size)

2. **Update the cache version** (if needed):
   - After uploading the new video, you may need to update the version number in `index.html`
   - Find the line: `<video src="noxtitan-logo.mp4?v=2" ...>`
   - Increment the version number (e.g., change `?v=2` to `?v=3`)
   - This ensures browsers load the new video instead of using a cached version

3. **Test the changes**:
   - Open the website in a browser
   - Force refresh (Ctrl+F5 or Cmd+Shift+R)
   - Verify the new video plays correctly

### Technical Details:
The `?v=2` query parameter is a cache-busting mechanism that forces browsers to treat the video as a new resource when it changes, preventing old cached versions from playing.
