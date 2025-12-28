// /**
//  * Load modals HTML into the page.
//  * Uses fetch API for Vite compatibility.
//  */
// export async function loadModals(): Promise<void> {
//   try {
//     const response = await fetch('/modals.html');
//     if (!response.ok) {
//       throw new Error(`Failed to load modals: ${response.statusText}`);
//     }
//     const html = await response.text();
//     const modalsDiv = document.getElementById('modals');
//     if (modalsDiv) {
//       modalsDiv.innerHTML = html;
//     }
//   } catch (error) {
//     console.error('Error loading modals:', error);
//   }
// }
