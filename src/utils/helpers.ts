/**
 * Show notification message
 * @param {string} message - The message to display
 * @param {string} type - The type of notification (success or error)
 */
export const showNotification = (message: string, type: 'success' | 'error' = 'success'): void => {
  // Remove any existing notification
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  
  // Set border color based on type
  if (type === 'error') {
    notification.style.borderLeftColor = 'var(--error-color, #ff4c4c)';
  }
  
  // Add to DOM
  document.body.appendChild(notification);
  
  // Trigger animation
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  // Auto hide after 3 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
};

/**
 * Format date to a readable string
 * @param {string} dateStr - ISO date string
 * @returns {string} Formatted date
 */
export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit' 
  });
};

/**
 * Format flight duration
 * @param {number} minutes - Duration in minutes
 * @returns {string} Formatted duration
 */
export const formatDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
};

/**
 * Generic API call function with error handling
 * @param {string} url - API endpoint
 * @param {Object} options - Fetch options
 * @returns {Promise} API response
 */
export const callApi = async (url: string, options: RequestInit = {}): Promise<any> => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      },
      ...options
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }
    
    return data;
  } catch (error) {
    if (error instanceof Error) {
      showNotification(error.message, 'error');
    } else {
      showNotification('An unknown error occurred', 'error');
    }
    throw error;
  }
};

// Prevent zooming on mobile devices
export const preventZooming = (): void => {
  window.addEventListener("wheel", (e) => {
    const isPinching = e.ctrlKey;
    if (isPinching) e.preventDefault();
  }, { passive: false });
}; 