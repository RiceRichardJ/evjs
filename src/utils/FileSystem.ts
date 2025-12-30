/**
 * Utility class for File System Access API operations
 * Provides simple read/write methods with automatic localStorage fallback
 */
export default class FileSystem {
	private static dirHandle: any = null;

	/**
	 * Request directory access (cached for session)
	 */
	private static async getDirectoryHandle(mode: 'read' | 'readwrite' = 'readwrite'): Promise<any> {
		if (!('showDirectoryPicker' in window)) {
			throw new Error('File System Access API not supported');
		}

		// Return cached handle if available
		if (this.dirHandle && mode === 'readwrite') {
			return this.dirHandle;
		}

		// Request new handle
		this.dirHandle = await (window as any).showDirectoryPicker({
			id: 'evjs-pilots',
			mode: mode,
			startIn: 'documents'
		});

		return this.dirHandle;
	}

	/**
	 * Write JSON data to file
	 */
	static async writeJSON(filename: string, data: any): Promise<void> {
		try {
			const dirHandle = await this.getDirectoryHandle('readwrite');
			const fileHandle = await dirHandle.getFileHandle(filename, { create: true });
			const writable = await fileHandle.createWritable();
			await writable.write(JSON.stringify(data, null, 2));
			await writable.close();
			console.log(`Saved to ${filename}`);
		} catch (error) {
			throw new Error(`Failed to write file: ${error}`);
		}
	}

	/**
	 * Read JSON data from file
	 */
	static async readJSON(filename: string): Promise<any> {
		try {
			const dirHandle = await this.getDirectoryHandle('read');
			const fileHandle = await dirHandle.getFileHandle(filename);
			const file = await fileHandle.getFile();
			const text = await file.text();
			return JSON.parse(text);
		} catch (error) {
			throw new Error(`Failed to read file: ${error}`);
		}
	}

	/**
	 * Check if File System Access API is supported
	 */
	static isSupported(): boolean {
		return 'showDirectoryPicker' in window;
	}
}
